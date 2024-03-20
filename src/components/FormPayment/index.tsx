import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../redux'
import { Form, InputGroup, Wrapper } from '../FormDelivery/styles'
import { formatPrice } from '../Modal'
import { formPayment } from '../../redux/reducers/form'
import { usePurchaseMutation } from '../../services/api'

import Button from '../Button'

const FormPayment = ({ onClickBack, onClickNext }: SideBarProps) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const { delivery, payment, product } = useSelector(
    (state: RootReducer) => state.form
  )
  const [purchase] = usePurchaseMutation()
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiredMonth: '',
      expiredYear: '',
      products: items.map((item) => ({
        id: item.id,
        price: item.preco
      }))
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(3, 'O nome no cartão precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O nome no cartão precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      cvv: Yup.number()
        .min(3, 'O código de segurança deve ter pelo menos 3 caracteres')
        .typeError('O campo é obrigatório')
        .integer('O campo é obrigatório')
        .required('O campo é obrigatório'),
      expiredMonth: Yup.number()
        .required('O campo é obrigatório')
        .typeError('O campo é obrigatório')
        .min(1, 'O mês de vencimento deve ser um número de 1 a 12')
        .max(12, 'O mês de vencimento deve ser um número de 1 a 12')
        .integer('O campo é obrigatório'),
      expiredYear: Yup.number()
        .min(24, 'Ano inválido')
        .typeError('O campo é obrigatório')
        .required('O campo é obrigatório')
        .integer('O campo é obrigatório')
    }),
    onSubmit: async (values) => {
      try {
        dispatch(formPayment(values))
        await purchase({
          // Espera até que a chamada de compra seja concluída
          delivery: delivery,
          payment: payment,
          product: product
        })
        onClickNext && onClickNext() // Executa a próxima etapa após todas as operações serem concluídas
      } catch (error) {
        console.error('Erro ao realizar o pagamento ou a compra:', error)
        // Lida com qualquer erro que ocorra durante o dispatch ou a compra
      }
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isChanged = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isChanged && isInvalid) {
      return message
    }
  }

  const getTotalPrice = () => {
    return items.reduce((items, item) => {
      return (items += item.preco)
    }, 0)
  }

  return (
    <Form>
      <h4>Pagamento - Valor a pagar {formatPrice(getTotalPrice())}</h4>
      <InputGroup>
        <label htmlFor="cardName">Nome no cartão</label>
        <input
          id="cardName"
          type="text"
          name="cardName"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.cardName}
        />
        <small>{getErrorMessage('cardName', form.errors.cardName)}</small>
      </InputGroup>
      <Wrapper>
        <InputGroup style={{ width: '228px' }}>
          <label htmlFor="cardNumber">Número do cartão</label>
          <InputMask
            id="cardNumber"
            type="text"
            name="cardNumber"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.cardNumber}
            mask="9999 9999 9999 9999"
          />
          <small>{getErrorMessage('cardNumber', form.errors.cardNumber)}</small>
        </InputGroup>
        <InputGroup style={{ width: '86px' }}>
          <label htmlFor="cvv">CVV</label>
          <InputMask
            id="cvv"
            type="string"
            name="cvv"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.cvv}
            mask="999"
          />
          <small>{getErrorMessage('city', form.errors.cvv)}</small>
        </InputGroup>
      </Wrapper>
      <Wrapper style={{ marginBottom: '24px' }}>
        <InputGroup style={{ width: '155px' }}>
          <label htmlFor="expiredMonth">Mês de vencimento</label>
          <InputMask
            id="expiredMonth"
            type="string"
            name="expiredMonth"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.expiredMonth}
            mask="99"
          />
          <small>
            {getErrorMessage('expiredMonth', form.errors.expiredMonth)}
          </small>
        </InputGroup>
        <InputGroup style={{ width: '155px' }}>
          <label htmlFor="expiredYear">Ano de vencimento</label>
          <InputMask
            id="expiredYear"
            type="string"
            name="expiredYear"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.expiredYear}
            mask="99"
          />
          <small>
            {getErrorMessage('expiredYear', form.errors.expiredYear)}
          </small>
        </InputGroup>
      </Wrapper>
      <Button
        style={{ marginBottom: '8px' }}
        type="submit"
        title="Clique aqui para continuar com o pagamento"
        onClick={form.handleSubmit}
      >
        Finalizar pagamento
      </Button>
      <Button
        title="Clique aqui para voltar ao carrinho"
        type="button"
        onClick={() => onClickBack && onClickBack()}
      >
        Voltar para edição de endereço
      </Button>
    </Form>
  )
}

export default FormPayment
