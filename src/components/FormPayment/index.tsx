import InputMask from 'react-input-mask'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../redux'
import { Form, InputGroup, Wrapper } from '../FormDelivery/styles'
import { formatPrice } from '../Modal'
import { usePurchaseMutation } from '../../services/api'

import Button from '../Button'
import { OrderContainer } from './styles'

const FormPayment = ({ onClickBack, onClickNext }: SideBarProps) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const { delivery } = useSelector((state: RootReducer) => state.form)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      name: '',
      number: '',
      code: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'O nome no cartão precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(19, 'O nome no cartão precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      code: Yup.number()
        .min(3, 'O código de segurança deve ter pelo menos 3 caracteres')
        .typeError('O campo é obrigatório')
        .integer('O campo é obrigatório')
        .required('O campo é obrigatório'),
      month: Yup.number()
        .required('O campo é obrigatório')
        .typeError('O campo é obrigatório')
        .min(1, 'O mês de vencimento deve ser um número de 1 a 12')
        .max(12, 'O mês de vencimento deve ser um número de 1 a 12')
        .integer('O campo é obrigatório'),
      year: Yup.number()
        .min(2024, 'Ano inválido')
        .typeError('O campo é obrigatório')
        .required('O campo é obrigatório')
        .integer('O campo é obrigatório')
    }),
    onSubmit: async (values) => {
      const { code, month, name, number, year } = values
      try {
        await purchase({
          delivery: delivery,
          payment: {
            card: {
              code: Number(code),
              name,
              number,
              expires: {
                month: Number(month),
                year: Number(year)
              }
            }
          },
          products: items.map((item) => ({
            id: item.id,
            price: item.preco
          }))
        })
      } catch (error) {
        console.error('Erro ao realizar o pedido', error)
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
      {isSuccess && data ? (
        <OrderContainer>
          <h3>Pedido Realizado - ID {data.orderId}</h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
            <br />
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
            <br />
            <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
            <br />
            <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Button
            type="button"
            title="Concluir"
            onClick={() => onClickNext && onClickNext()}
          >
            Concluir
          </Button>
        </OrderContainer>
      ) : (
        <>
          <h4>Pagamento - Valor a pagar {formatPrice(getTotalPrice())}</h4>
          <InputGroup>
            <label htmlFor="name">Nome no cartão</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.name}
            />
            <small>{getErrorMessage('name', form.errors.name)}</small>
          </InputGroup>
          <Wrapper style={{ gap: '30px' }}>
            <InputGroup className="card-number">
              <label htmlFor="number">Número do cartão</label>
              <InputMask
                id="number"
                type="text"
                name="number"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.number}
                mask="9999 9999 9999 9999"
              />
              <small>{getErrorMessage('number', form.errors.number)}</small>
            </InputGroup>
            <InputGroup className="card-code">
              <label htmlFor="code">CVV</label>
              <InputMask
                id="code"
                type="string"
                name="code"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.code}
                mask="999"
              />
              <small>{getErrorMessage('code', form.errors.code)}</small>
            </InputGroup>
          </Wrapper>
          <Wrapper style={{ marginBottom: '24px', gap: '34px' }}>
            <InputGroup>
              <label htmlFor="month">Mês de vencimento</label>
              <InputMask
                id="month"
                type="string"
                name="month"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.month}
                mask="99"
              />
              <small>{getErrorMessage('month', form.errors.month)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="year">Ano de vencimento</label>
              <InputMask
                id="year"
                type="string"
                name="year"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.year}
                mask="9999"
              />
              <small>{getErrorMessage('year', form.errors.year)}</small>
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
        </>
      )}
    </Form>
  )
}

export default FormPayment
