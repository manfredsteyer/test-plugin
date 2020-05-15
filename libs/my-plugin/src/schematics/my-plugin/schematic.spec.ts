import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { MyPluginSchematicSchema } from './schema';

describe('my-plugin schematic', () => {
  let appTree: Tree;
  const options: MyPluginSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@delme/my-plugin1',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('my-plugin', options, appTree).toPromise()
    ).resolves.not.toThrowError();

    console.debug('files', appTree.root.subfiles);
    console.debug('dirs', appTree.root.subdirs);

    expect(appTree.exists('libs/test/tsconfig.lib.json')).toBeTruthy();

  });
});
