import { Installer } from './Installer';
import { Analyzer } from './Analyzer';
import { TestRunner } from './TestRunner';
import { Publisher } from './Publisher';
import { pipeline } from './pipeline';

const componentPipeline = pipeline(Installer, Analyzer, TestRunner)(Publisher);

componentPipeline.handle('fake-component');
