import * as yup from 'yup';

export const competenceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  organization_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
