import * as yup from 'yup';
const schema = yup.object().shape({
    name: yup.string().min(2, "name must be at least 2 characters"),
    size: yup.string(),
    extraCheese: yup.boolean(),
    pepperoni: yup.boolean(),
    mushroom: yup.boolean(),
    ham: yup.boolean(),
    special: yup.string()
})
export default schema;