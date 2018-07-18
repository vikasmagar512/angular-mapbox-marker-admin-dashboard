import { FinancialTablesModule } from './financial-tables.module';

describe('FinancialTablesModule', () => {
  let financialTablesModule: FinancialTablesModule;

  beforeEach(() => {
    financialTablesModule = new FinancialTablesModule();
  });

  it('should create an instance', () => {
    expect(financialTablesModule).toBeTruthy();
  });
});
