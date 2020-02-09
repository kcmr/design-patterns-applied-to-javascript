import { Installer } from './Installer';
import { Analyzer } from './Analyzer';
import { Tester } from './Tester';
import { Publisher } from './Publisher';
import { pipeline } from './pipeline';

const componentPipeline = pipeline(Installer, Analyzer, Tester)(Publisher);

componentPipeline.handle('fake-component');
