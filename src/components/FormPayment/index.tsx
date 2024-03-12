import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../redux'
import { SideBarProps } from '../FormDelivery'
import { Form, InputGroup, Wrapper } from '../FormDelivery/styles'
import { formatPrice } from '../Modal'

import Button from '../Button'

const FormPayment = ({ onClickBack, onClickNext }: SideBarProps) => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiredMonth: '',
      expiredYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(3, 'O nome no cartão precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(3, 'O nome no cartão precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      cvv: Yup.number()
        .min(3, 'O código de segurança deve ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      expiredMonth: Yup.number()
        .min(2, 'O mês de vencimento deve ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      expiredYear: Yup.number()
        .min(2, 'O ano de vencimento deve ter pelo menos 2 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: () => {
      onClickNext!()
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
          <input
            id="cardNumber"
            type="text"
            name="cardNumber"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.cardNumber}
          />
          <small>{getErrorMessage('cardNumber', form.errors.cardNumber)}</small>
        </InputGroup>
        <InputGroup style={{ width: '86px' }}>
          <label htmlFor="cvv">CVV</label>
          <input
            id="cvv"
            type="number"
            name="cvv"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.cvv}
          />
          <small>{getErrorMessage('city', form.errors.cvv)}</small>
        </InputGroup>
      </Wrapper>
      <Wrapper style={{ marginBottom: '24px' }}>
        <InputGroup style={{ width: '155px' }}>
          <label htmlFor="expiredMonth">Mês de vencimento</label>
          <input
            id="expiredMonth"
            type="number"
            name="expiredMonth"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.expiredMonth}
          />
          <small>
            {getErrorMessage('expiredMonth', form.errors.expiredMonth)}
          </small>
        </InputGroup>
        <InputGroup style={{ width: '155px' }}>
          <label htmlFor="expiredYear">Ano de vencimento</label>
          <input
            id="expiredYear"
            type="number"
            name="expiredYear"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.expiredYear}
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
        onClick={onClickBack!}
      >
        Voltar para edição de endereço
      </Button>
    </Form>
  )
}

export default FormPayment
