import { Serializer as СпрСотрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпрСотрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
