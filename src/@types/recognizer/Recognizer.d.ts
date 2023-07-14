import { IModel } from "../model/Model"

export interface IRecognizer {
  export(model: IModel, mimeTypes?: string[]): Promise<IModel | never>
  resize(model: IModel): Promise<IModel | never>
  import?(model: IModel, data: Blob, mimeType?: string): Promise<IModel | never>
}
