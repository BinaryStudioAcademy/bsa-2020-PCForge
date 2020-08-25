import { BaseSchema, XML, ExternalDocs } from 'swagger-schema-official';

export interface SwaggerSchema extends BaseSchema {
  $ref?: string;
  allOf?: SwaggerSchema[];
  additionalProperties?: SwaggerSchema | boolean;
  properties?: { [propertyName: string]: SwaggerSchema };
  anyOf?: SwaggerSchema[];
  oneOf?: SwaggerSchema[];
  nullable?: boolean;
  discriminator?: string;
  readOnly?: boolean;
  xml?: XML;
  externalDocs?: ExternalDocs;
  example?: string | null;
  required?: string[];
}
