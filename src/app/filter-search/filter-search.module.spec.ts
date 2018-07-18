import { FilterSearchModule } from './filter-search.module';

describe('FilterSearchModule', () => {
  let filterSearchModule: FilterSearchModule;

  beforeEach(() => {
    filterSearchModule = new FilterSearchModule();
  });

  it('should create an instance', () => {
    expect(filterSearchModule).toBeTruthy();
  });
});
