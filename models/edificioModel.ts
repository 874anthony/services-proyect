// import mongoose from 'mongoose';
// import validator from 'validator';

// const edificioSchema = new mongoose.Schema({
//   nombreEdificio: {
//     type: String,
//     required: [true, 'Por favor, digite el nombre del edificio.'],
//   },
//   direccionEdificio: {
//     type: String,
//     minlength: 10,
//     required: true,
//   },
//   constructoraEdificio: {
//     type: String,
//     required: true,
//   },
//   emailEdificio: {
//     type: String,
//     unique: true,
//     required: [true, 'Por favor, digite el correo electrónico del edificio.'],
//     validate: [validator.isEmail, 'Por favor, digite un email válido.'],
//   },
//   webEdificio: {
//     type: String,
//     default: 'Sin definir',
//     minlength: 10,
//   },
//   numeroAptosEdificio: {
//     type: Number,
//     min: 1,
//     required: true,
//   },
//   numeroTorresEdificio: {
//     type: Number,
//     min: 1,
//     required: true,
//   },
//   administrador: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Administrador',
//     required: [true, 'Un edificio debe tener al menos un administrador!'],
//   },
// });

// // Populando los datos del administrador.
// edificioSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'administrador',
//     select: 'emailAdministrador telefonoAdministrador',
//   });
//   next();
// });

// const Edificio = mongoose.model('Edificio', edificioSchema);

// export default Edificio;
