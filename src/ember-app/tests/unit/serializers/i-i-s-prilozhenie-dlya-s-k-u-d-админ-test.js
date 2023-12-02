import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-dlya-s-k-u-d-админ', 'Unit | Serializer | i-i-s-prilozhenie-dlya-s-k-u-d-админ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-prilozhenie-dlya-s-k-u-d-админ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-prilozhenie-dlya-s-k-u-d-админ',
    'model:i-i-s-prilozhenie-dlya-s-k-u-d-кар-дос',
    'model:i-i-s-prilozhenie-dlya-s-k-u-d-спр-сотр',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
