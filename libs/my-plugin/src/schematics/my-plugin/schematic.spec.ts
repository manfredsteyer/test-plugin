import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { MyPluginSchematicSchema } from './schema';

describe('my-plugin schematic', () => {
  let appTree: Tree;
  const options: MyPluginSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@delme/my-plugin',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('my-plugin', options, appTree).toPromise()
    ).resolves.not.toThrowError();
  });
});
