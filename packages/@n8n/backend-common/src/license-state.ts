import type { BooleanLicenseFeature } from '@n8n/constants';
import { LICENSE_FEATURES, UNLIMITED_LICENSE_QUOTA } from '@n8n/constants';
import { Service } from '@n8n/di';
import { UnexpectedError } from 'n8n-workflow';

import type { FeatureReturnType, LicenseProvider } from './types';

class ProviderNotSetError extends UnexpectedError {
	constructor() {
		super('Cannot query license state because license provider has not been set');
	}
}

@Service()
export class LicenseState {
	licenseProvider: LicenseProvider | null = null;

	setLicenseProvider(provider: LicenseProvider) {
		this.licenseProvider = provider;
	}

	private assertProvider(): asserts this is { licenseProvider: LicenseProvider } {
		if (!this.licenseProvider) throw new ProviderNotSetError();
	}

	// --------------------
	//     core queries
	// --------------------

	isLicensed(_feature: BooleanLicenseFeature) {
		// BYPASSED: Always return true to enable all enterprise features
		return true;
		// Original implementation commented out:
		// this.assertProvider();
		// return this.licenseProvider.isLicensed(feature);
	}

	getValue<T extends keyof FeatureReturnType>(feature: T): FeatureReturnType[T] {
		// BYPASSED: Return unlimited quotas for enterprise features
		if (feature === 'planName') {
			return 'Enterprise' as FeatureReturnType[T];
		}

		// For quota features, return unlimited (-1)
		if (feature.toString().includes('quota:')) {
			return UNLIMITED_LICENSE_QUOTA as FeatureReturnType[T];
		}

		// Try to get the real value first if provider exists
		try {
			this.assertProvider();
			const realValue = this.licenseProvider.getValue(feature);
			if (realValue !== undefined && realValue !== null) {
				return realValue;
			}
		} catch {
			// Ignore provider errors, fallback to unlimited
		}

		// Default to unlimited for numeric values
		return UNLIMITED_LICENSE_QUOTA as FeatureReturnType[T];
	}

	// --------------------
	//      booleans
	// --------------------

	isCustomRolesLicensed() {
		return this.isLicensed(LICENSE_FEATURES.CUSTOM_ROLES);
	}

	isSharingLicensed() {
		return this.isLicensed('feat:sharing');
	}

	isLogStreamingLicensed() {
		return this.isLicensed('feat:logStreaming');
	}

	isLdapLicensed() {
		return this.isLicensed('feat:ldap');
	}

	isSamlLicensed() {
		return this.isLicensed('feat:saml');
	}

	isOidcLicensed() {
		return this.isLicensed('feat:oidc');
	}

	isMFAEnforcementLicensed() {
		return this.isLicensed('feat:mfaEnforcement');
	}

	isApiKeyScopesLicensed() {
		return this.isLicensed('feat:apiKeyScopes');
	}

	isAiAssistantLicensed() {
		return this.isLicensed('feat:aiAssistant');
	}

	isAskAiLicensed() {
		return this.isLicensed('feat:askAi');
	}

	isAiCreditsLicensed() {
		return this.isLicensed('feat:aiCredits');
	}

	isAdvancedExecutionFiltersLicensed() {
		return this.isLicensed('feat:advancedExecutionFilters');
	}

	isAdvancedPermissionsLicensed() {
		return this.isLicensed('feat:advancedPermissions');
	}

	isDebugInEditorLicensed() {
		return this.isLicensed('feat:debugInEditor');
	}

	isBinaryDataS3Licensed() {
		return this.isLicensed('feat:binaryDataS3');
	}

	isMultiMainLicensed() {
		return this.isLicensed('feat:multipleMainInstances');
	}

	isVariablesLicensed() {
		return this.isLicensed('feat:variables');
	}

	isSourceControlLicensed() {
		return this.isLicensed('feat:sourceControl');
	}

	isExternalSecretsLicensed() {
		return this.isLicensed('feat:externalSecrets');
	}

	isWorkflowHistoryLicensed() {
		return this.isLicensed('feat:workflowHistory');
	}

	isAPIDisabled() {
		return this.isLicensed('feat:apiDisabled');
	}

	isWorkerViewLicensed() {
		return this.isLicensed('feat:workerView');
	}

	isProjectRoleAdminLicensed() {
		return this.isLicensed('feat:projectRole:admin');
	}

	isProjectRoleEditorLicensed() {
		return this.isLicensed('feat:projectRole:editor');
	}

	isProjectRoleViewerLicensed() {
		return this.isLicensed('feat:projectRole:viewer');
	}

	isCustomNpmRegistryLicensed() {
		return this.isLicensed('feat:communityNodes:customRegistry');
	}

	isFoldersLicensed() {
		return this.isLicensed('feat:folders');
	}

	isInsightsSummaryLicensed() {
		return this.isLicensed('feat:insights:viewSummary');
	}

	isInsightsDashboardLicensed() {
		return this.isLicensed('feat:insights:viewDashboard');
	}

	isInsightsHourlyDataLicensed() {
		return this.isLicensed('feat:insights:viewHourlyData');
	}

	isWorkflowDiffsLicensed() {
		return this.isLicensed('feat:workflowDiffs');
	}

	// --------------------
	//      integers
	// --------------------

	getMaxUsers() {
		// BYPASSED: Always return unlimited users
		return UNLIMITED_LICENSE_QUOTA;
	}

	getMaxActiveWorkflows() {
		// BYPASSED: Always return unlimited active workflows
		return UNLIMITED_LICENSE_QUOTA;
	}

	getMaxVariables() {
		// BYPASSED: Always return unlimited variables
		return UNLIMITED_LICENSE_QUOTA;
	}

	getMaxAiCredits() {
		// BYPASSED: Always return unlimited AI credits
		return UNLIMITED_LICENSE_QUOTA;
	}

	getWorkflowHistoryPruneQuota() {
		// BYPASSED: Always return unlimited workflow history
		return UNLIMITED_LICENSE_QUOTA;
	}

	getInsightsMaxHistory() {
		// BYPASSED: Always return unlimited insights history
		return UNLIMITED_LICENSE_QUOTA;
	}

	getInsightsRetentionMaxAge() {
		// BYPASSED: Always return unlimited retention
		return UNLIMITED_LICENSE_QUOTA;
	}

	getInsightsRetentionPruneInterval() {
		// BYPASSED: Always return unlimited prune interval
		return UNLIMITED_LICENSE_QUOTA;
	}

	getMaxTeamProjects() {
		// BYPASSED: Always return unlimited team projects
		return UNLIMITED_LICENSE_QUOTA;
	}

	getMaxWorkflowsWithEvaluations() {
		// BYPASSED: Always return unlimited workflows with evaluations
		return UNLIMITED_LICENSE_QUOTA;
	}
}
