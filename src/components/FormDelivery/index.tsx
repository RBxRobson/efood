import { Btn } from '../ProductCard/styles'
import { Form, InputGroup } from './styles'

export type SideBarProps = {
  onClickNext?: () => void
  onClickBack?: () => void
}

const FormDelivery = ({ onClickBack, onClickNext }: SideBarProps) => {
  return (
    <Form>
      <h4>Entrega</h4>
      <InputGroup>
        <label htmlFor="receiver">Quem irá receber</label>
        <input
          id="receiver"
          type="text"
          name="receiver"
          // onChange={}
          // onBlur={}
          // value={}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="address">Endereço</label>
        <input
          id="address"
          type="text"
          name="address"
          // onChange={}
          // onBlur={}
          // value={}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="city">Cidade</label>
        <input
          id="city"
          type="text"
          name="city"
          // onChange={}
          // onBlur={}
          // value={}
        />
      </InputGroup>
      <div className="wrapper">
        <InputGroup>
          <label htmlFor="cep">CEP</label>
          <input
            style={{ width: '155px' }}
            id="cep"
            type="text"
            name="cep"
            // onChange={}
            // onBlur={}
            // value={}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="number">Número</label>
          <input
            style={{ width: '155px' }}
            id="number"
            type="text"
            name="number"
            // onChange={}
            // onBlur={}
            // value={}
          />
        </InputGroup>
      </div>
      <InputGroup style={{ marginBottom: '24px' }}>
        <label htmlFor="complement">Complemento</label>
        <input
          id="complement"
          type="text"
          name="complement"
          // onChange={}
          // onBlur={}
          // value={}
        />
      </InputGroup>
      <Btn
        style={{ marginBottom: '8px' }}
        title="Clique aqui para continuar com o pagamento"
        type="button"
        onClick={onClickNext}
      >
        Continuar com o pagamento
      </Btn>
      <Btn
        title="Clique aqui para voltar ao carrinho"
        type="button"
        onClick={onClickBack}
      >
        Voltar ao carrinho
      </Btn>
    </Form>
  )
}

export default FormDelivery
