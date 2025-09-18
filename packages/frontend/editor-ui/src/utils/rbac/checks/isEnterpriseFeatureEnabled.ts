import { useSettingsStore } from '@/stores/settings.store';
import type { RBACPermissionCheck, EnterprisePermissionOptions } from '@/types/rbac';

export const isEnterpriseFeatureEnabled: RBACPermissionCheck<EnterprisePermissionOptions> = (
	_options,
) => {
	// BYPASSED: Always return true to enable all enterprise features in the frontend
	return true;

	// Original implementation commented out:
	// if (!options?.feature) {
	// 	return true;
	// }
	//
	// const features = Array.isArray(options.feature) ? options.feature : [options.feature];
	// const settingsStore = useSettingsStore();
	// const mode = options.mode ?? 'allOf';
	// if (mode === 'allOf') {
	// 	return features.every((feature) => settingsStore.isEnterpriseFeatureEnabled[feature]);
	// } else {
	// 	return features.some((feature) => settingsStore.isEnterpriseFeatureEnabled[feature]);
	// }
};
