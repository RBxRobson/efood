import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Form, InputGroup, Wrapper } from './styles'
import Button from '../Button'

export type SideBarProps = {
  onClickNext?: () => void
  onClickBack?: () => void
}

const FormDelivery = ({ onClickBack, onClickNext }: SideBarProps) => {
  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'O nome da cidade ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(8, 'O CEP precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.number()
        .min(3, 'O número precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string()
        .min(3, 'O número precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: () => {
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
        <label htmlFor="address">Endereço</label>
        <input
          id="address"
          type="text"
          name="address"
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.address}
        />
        <small>{getErrorMessage('address', form.errors.address)}</small>
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
      <Wrapper>
        <InputGroup style={{ width: '155px' }}>
          <label htmlFor="cep">CEP</label>
          <input
            id="cep"
            type="text"
            name="cep"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.cep}
          />
          <small>{getErrorMessage('cep', form.errors.cep)}</small>
        </InputGroup>
        <InputGroup style={{ width: '155px' }}>
          <label htmlFor="number">Número</label>
          <input
            id="number"
            type="number"
            name="number"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.number}
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
