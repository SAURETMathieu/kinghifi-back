import Joi from 'joi';

const artistAddSchema = Joi.object({
  role: Joi.string().required()
    .error(new Error('Le role de l\'artiste est requis et doit être une chaîne de caractères')),
  artist_id: Joi.number().integer().positive().required()
    .error(new Error('L\'identifiant e l\'artiste est requis et doit être un entier positif')),
  order: Joi.number().integer().min(0).required()
    .error(new Error('L\'index de l\'ordre doit être supérieur ou égal à 0')),
});

export default artistAddSchema;
