async function apply() {
	const tmp = '/var/tmp';

	console.log('[Log] Requesting read permission');
	const fsPermission = await fs.access([tmp]);
	if (!fsPermission) console.log(`[ERROR] Permission rejected`);
	console.log('[Log] Read permission granted');

	console.log('[Log] Checking current permissions');
	const tmpStats = await fs.stat(tmp);

	if (tmpStats.owner === 'root' && tmpStats.group === 'wheel') {
		console.log('[Log] Permissions are correct');
		console.log('[Log] No fix needed');

		await system.showToast({
			title: 'No Fix Needed',
			subTitle: '',
			displayMode: 'complete',
			type: 'regular'
		});

		await system.sleep(1000);

		return true;
	}

	console.log('[Log] Permissions are incorrect');
	console.log('[Log] Fixing permissions');

	try {
		await fs.chmod(tmp, 777);
	} catch (error) {
		console.log(`[ERROR] ${error}`);
		return false;
	}

	console.log('[Log] Permissions fixed');

	await system.showToast({
		title: 'App Store has been fixed',
		subTitle: '',
		displayMode: 'complete',
		type: 'regular'
	});

	await system.sleep(1000);

	return true;
}

async function restore() {
	return true;
}
