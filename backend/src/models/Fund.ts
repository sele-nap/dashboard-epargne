import mongoose, { Schema, Document } from 'mongoose';

export interface IValorisation {
  date: string;
  value: number;
}

export interface IFund extends Document {
  isin: string;
  fundName: string;
  valorisations: IValorisation[];
}

const ValorisationSchema = new Schema<IValorisation>({
  date: { type: String, required: true },
  value: { type: Number, required: true },
});

const FundSchema = new Schema<IFund>({
  isin: { type: String, required: true, unique: true },
  fundName: { type: String, required: true },
  valorisations: [ValorisationSchema],
});

export default mongoose.model<IFund>('Fund', FundSchema);
