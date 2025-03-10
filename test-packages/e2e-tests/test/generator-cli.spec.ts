import * as path from 'path';
import { resolve } from 'path';
import execa from 'execa';
import * as fs from 'fs-extra';
import mock from 'mock-fs';
import { generate } from '../../../packages/generator/src/generator';
import { createOptionsFromConfig } from '../../../packages/generator/src/generator-options';
import { createOptions } from '../../../packages/generator/test/test-util/create-generator-options';
import { oDataServiceSpecs } from '../../../test-resources/odata-service-specs';

const pathToGenerator = path.resolve(
  __dirname,
  '../../../packages/generator/src/generator-cli.ts'
);

describe('generator-cli', () => {
  const inputDir = path.resolve(oDataServiceSpecs, 'v2', 'API_TEST_SRV');
  const rootNodeModules = path.resolve(__dirname, '../../../node_modules');
  const pathToConfig = path.resolve(__dirname, 'generator.config.json');
  const generatorCommon = path.resolve(
    __dirname,
    '../../../packages/generator-common'
  );
  const outputDirVerionPackageJson = resolve(
    __dirname,
    '../generation-e2e-test-version-in-package-json'
  );
  const outputDirGenerateAll = resolve(__dirname, '../generation-e2e-test');

  beforeAll(() => {
    mock({
      [inputDir]: mock.load(inputDir),
      [generatorCommon]: mock.load(generatorCommon),
      [pathToConfig]: mock.load(pathToConfig),
      [rootNodeModules]: mock.load(rootNodeModules),
      [outputDirGenerateAll]: {},
      [outputDirVerionPackageJson]: {}
    });
  });

  afterAll(() => {
    mock.restore();
  });

  it('should fail if mandatory parameters are not there', async () => {
    try {
      await execa('npx', ['ts-node', pathToGenerator]);
    } catch (err) {
      expect(err.stderr).toContain(
        'Missing required arguments: inputDir, outputDir'
      );
    }
  }, 60000);

  it('should generate VDM if all arguments are there', async () => {
    await generate(
      createOptions({
        inputDir,
        outputDir: outputDirGenerateAll,
        generateJs: true,
        generatePackageJson: true
      })
    );
    const services = fs.readdirSync(outputDirGenerateAll);
    expect(services.length).toBeGreaterThan(0);
    const entities = fs.readdirSync(
      path.resolve(outputDirGenerateAll, services[0])
    );
    expect(entities).toContain('TestEntity.ts');
    expect(entities).toContain('TestEntity.js');
    expect(entities).toContain('package.json');
  });

  it('should create options from a config file', () => {
    const outputDir = path.resolve(__dirname, 'generator-test-output');
    expect(createOptionsFromConfig(pathToConfig)).toEqual({
      inputDir,
      outputDir
    });
  });

  it('should set version when versionInPackageJson option is used', async () => {
    await generate(
      createOptions({
        inputDir,
        outputDir: outputDirVerionPackageJson,
        generateJs: true,
        generatePackageJson: true,
        versionInPackageJson: '42.23'
      })
    );
    const services = fs.readdirSync(outputDirVerionPackageJson);
    const actualPackageJson = JSON.parse(
      fs
        .readFileSync(
          path.resolve(
            outputDirVerionPackageJson.toString(),
            services[0],
            'package.json'
          )
        )
        .toString()
    );
    expect(actualPackageJson.version).toEqual('42.23');
  });

  it('should throw a warning message for a deprecated option even when the generation is failed', async () => {
    // Use a broken service to stop the service generation early - we are only interested in the log statement
    try {
      await execa('npx', [
        'ts-node',
        pathToGenerator,
        '-i',
        path.resolve(
          __dirname,
          '../../../test-resources/generator/resources/faulty-edmx'
        ),
        '-o',
        'doesNotMatter',
        '--versionInPackageJson=42.23'
      ]);
    } catch (err) {
      expect(err.stdout).toContain(
        "The option 'versionInPackageJson' is deprecated since v2.6.0."
      );
    }
  }, 60000);

  it('should throw a warning message for a deprecated option even when the generation is failed', async () => {
    // Use a broken service to stop the service generation early - we are only interested in the log statement
    try {
      await execa('npx', [
        'ts-node',
        pathToGenerator,
        '-i',
        path.resolve(
          __dirname,
          '../../../test-resources/generator/resources/faulty-edmx'
        ),
        '-o',
        'doesNotMatter',
        '--generateNpmrc'
      ]);
    } catch (err) {
      expect(err.stdout).toContain(
        "The option 'generateNpmrc' is deprecated since v2.8.0."
      );
    }
  }, 60000);
});
