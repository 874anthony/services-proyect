// import mongoose from 'mongoose';
// // import validator from 'validator';

// const apartamentoSchema = new mongoose.Schema({
//   numeroApartamento: {
//     type: Number,
//     required: true,
//     min: 1,
//   },
//   fechaInicio: {
//     type: Date,
//   },
//   fechaFinal: {
//     type: Date,
//   },
//   estadoApartamento: {
//     type: String,
//     required: true,
//   },
//   propietario: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Propietario',
//     required: [true, 'Un apartamento debe tener al menos un propietario!'],
//   },
//   edificio: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Edificio',
//     required: [true, 'Un apartamento debe tener al menos un edificio!'],
//   },
// });

// // Populando los datos del administrador.
// apartamentoSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'propietario',
//     select: 'identificacionPropietario nombrePropietario correoPropietario',
//   }).populate({
//     path: 'edificio',
//     select: 'nombreEdificio direccionEdificio',
//   });
//   next();
// });

// const Apartamento = mongoose.model('Apartamento', apartamentoSchema);

// export default Apartamento;
