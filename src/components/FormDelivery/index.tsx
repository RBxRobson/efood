import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'

import Button from '../Button'
import { formDelivery } from '../../redux/reducers/form'

import { Form, InputGroup, Wrapper } from './styles'

const FormDelivery = ({ onClickBack, onClickNext }: SideBarProps) => {
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'O nome da cidade precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'O CEP precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(2, 'O número precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string().min(
        3,
        'O número precisa ter pelo menos 3 caracteres'
      )
    }),
    onSubmit: (values) => {
      const { description, city, complement, number, receiver, zipCode } =
        values
      dispatch(
        formDelivery({
          delivery: {
            receiver,
            address: {
              city,
              description,
              number: Number(number),
              zipCode,
              complement
            }
          }
        })
      )
      onClickNext && onClickNext()
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isChanged = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isChanged && isInvalid) {
      return message
    }
  }

  return (
    <Form>
      <h4>Entrega</h4>
      <InputGroup>
        <label htmlFor="receiver">Quem irá receber</label>
        <input
          id="receiver"
          type="text"
          name="receiver"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.receiver}
        />
        <small>{getErrorMessage('receiver', form.errors.receiver)}</small>
      </InputGroup>
      <InputGroup>
        <label htmlFor="description">Endereço</label>
        <input
          id="description"
          type="text"
          name="description"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.description}
        />
        <small>{getErrorMessage('description', form.errors.description)}</small>
      </InputGroup>
      <InputGroup>
        <label htmlFor="city">Cidade</label>
        <input
          id="city"
          type="text"
          name="city"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.city}
        />
        <small>{getErrorMessage('city', form.errors.city)}</small>
      </InputGroup>
      <Wrapper style={{ gap: '34px' }}>
        <InputGroup>
          <label htmlFor="zipCode">CEP</label>
          <InputMask
            id="zipCode"
            type="text"
            name="zipCode"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.zipCode}
            mask="99999-999"
          />
          <small>{getErrorMessage('zipCode', form.errors.zipCode)}</small>
        </InputGroup>
        <InputGroup>
          <label htmlFor="number">Número</label>
          <InputMask
            id="number"
            type="string"
            name="number"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.number}
            mask="9999"
          />
          <small>{getErrorMessage('number', form.errors.number)}</small>
        </InputGroup>
      </Wrapper>
      <InputGroup style={{ marginBottom: '24px' }}>
        <label htmlFor="complement">Complemento (opcional)</label>
        <input
          id="complement"
          type="text"
          name="complement"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.complement}
        />
        <small>{getErrorMessage('complement', form.errors.complement)}</small>
      </InputGroup>
      <Button
        style={{ marginBottom: '8px' }}
        type="submit"
        title="Clique aqui para continuar com o pagamento"
        onClick={form.handleSubmit}
      >
        Continuar com o pagamento
      </Button>
      <Button
        title="Clique aqui para voltar ao carrinho"
        type="button"
        onClick={() => onClickBack && onClickBack()}
      >
        Voltar ao carrinho
      </Button>
    </Form>
  )
}

export default FormDelivery
