import {
  chain,
  Rule,
  externalSchematic,
} from '@angular-devkit/schematics';

export default function (options: any): Rule {
  return chain([
    externalSchematic('@nrwl/angular', 'lib', {
      name: options.name,
      style: 'scss',
    }),
  ]);
}
