// import mongoose from 'mongoose';
// // import validator from 'validator';

// const gestionVisitaSchema = new mongoose.Schema({
//   nombreVisitante: {
//     type: String,
//     minlength: 7,
//     required: [true, 'Digite el nombre de la visita.'],
//   },
//   identificacionVisitante: {
//     type: Number,
//     unique: true,
//     required: [true, 'Digite la identificación de la visita.'],
//   },
//   horaIngresoVisita: {
//     type: Date,
//     required: [true, 'Digite la hora de ingreso de la visita.'],
//   },
//   horaFinVisita: {
//     type: Date,
//     required: [true, 'Digite la hora de salida de la visita.'],
//   },
//   motivoVisita: {
//     type: String,
//     minlength: 10,
//     required: [true, 'Digite el motivo de la visita.'],
//   },
//   propietario: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Propietario',
//     required: [true, 'Un visitante debe al menos visitar a un propietario!'],
//   },
//   apartamento: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Apartamento',
//     required: [true, 'Un visitante debe visitar al menos un apartamento!'],
//   },
// });

// // Populando los datos del administrador.
// gestionVisitaSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'apartamento',
//     select: 'numeroApartamento',
//   });
//   next();
// });

// const GestionVisita = mongoose.model('GestionVisita', gestionVisitaSchema);

// export default GestionVisita;
