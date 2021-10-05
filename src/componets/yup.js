import * as Yup from 'yup';

export const Schema = Yup.object().shape({
    name: Yup.string().required(" o campo é requirido"),
    email: Yup.string().email("O campo deve ser um e-mail válido!").required("O campo email é obrigatório"),
    cpf: Yup.string("O campo precisa ser um número").required ("Campo obrigatório"),
    genre: Yup.string().required ("Campo obrigatório"),
    road: Yup.string().required ("Campo obrigatório"),
    zipcode: Yup.string().required ("Campo obrigatório"),
    number: Yup.string().required("campo obrigatório"),
    date: Yup.string().required("campo obrigatório")
  });