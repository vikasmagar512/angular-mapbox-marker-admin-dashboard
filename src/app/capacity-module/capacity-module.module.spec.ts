import { CapacityModuleModule } from './capacity-module.module';

describe('CapacityModuleModule', () => {
  let capacityModuleModule: CapacityModuleModule;

  beforeEach(() => {
    capacityModuleModule = new CapacityModuleModule();
  });

  it('should create an instance', () => {
    expect(capacityModuleModule).toBeTruthy();
  });
});
