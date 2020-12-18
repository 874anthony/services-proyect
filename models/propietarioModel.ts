// import mongoose from 'mongoose';
// import validator from 'validator';

// const propietarioSchema = new mongoose.Schema({
//   identificacionPropietario: {
//     type: Number,
//     required: [true, 'Por favor, digite la identificación del propietario.'],
//     min: 7,
//     unique: true,
//   },
//   nombrePropietario: {
//     type: String,
//     required: [true, 'Por favor, digite el nombre del propietario.'],
//     minlength: 8,
//   },
//   correoPropietario: {
//     type: String,
//     required: [true, 'Por favor, digite el correo del propietario.'],
//     unique: true,
//     lowercase: true,
//     validate: [validator.isEmail, 'Por favor, digite un email válido.'],
//   },
//   telefonoPropietario: {
//     type: Number,
//     required: [true, 'Por favor, digite el número del propietario.'],
//     min: 10,
//     unique: true,
//   },
//   tipoPropietario: {
//     type: String,
//     enum: {
//       values: ['propietario', 'arrendatario'],
//       message: 'No puedes ser este tipo: {PATH}',
//     },
//     default: 'Sin definir',
//   },
// });

// const Propietario = mongoose.model('Propietario', propietarioSchema);

// export default Propietario;
