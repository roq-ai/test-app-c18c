interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['End User'],
  tenantRoles: ['Administrator', 'Team Member'],
  tenantName: 'Organization',
  applicationName: 'Test app',
  addOns: ['notifications', 'chat'],
};
