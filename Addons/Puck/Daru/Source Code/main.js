async function apply() {
	try {
		const uikitFile = '/var/mobile/Library/Preferences/com.apple.UIKit.plist';
		const uikitDefault = `
        <?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
        <plist version="1.0">
        <dict>
            <key>UIStatusBarVisualProviderClassName</key>
            <string>_UIStatusBarVisualProvider_Split1170</string>
        </dict>
        </plist>`;

		console.log('[Log] Checking if the correct file exists');
		const uikitFileExists = await fs.exists(uikitFile);

		if (!uikitFileExists) {
			console.log('[Log] File does not exist');

			console.log('[Log] Requesting write permission');
			const fsPermission = await fs.access([uikitFile]);
			if (!fsPermission) return console.log(`[ERROR] Permission rejected`);
			console.log('[Log] Write permission granted');

			console.log('[Log] Creating file');
			await fs.writeFile(uikitFile, uikitDefault);
			console.log('[Log] File created');
		} else {
			console.log('[Log] File exists');
		}

		console.log('[Log] Requesting read permission');
		const fsPermission = await fs.access([uikitFile]);
		if (!fsPermission) return console.log(`[ERROR] Permission rejected`);
		console.log('[Log] Read permission granted');

		console.log('[Log] Reading file');
		const uikitContent = await fs.readFile(uikitFile);
		console.log('[Log] File read');

		console.log('[Log] Parsing read file');
		const parsedUIKitContent = await PropertyListSerialization.loadToJson(uikitContent);
		console.log('[Log] Done parsing read file');

		console.log('[Log] Checking if the correct key exists');
		const uikitKeyExists = parsedUIKitContent.UIStatusBarVisualProviderClassName;
		if (!uikitKeyExists) {
			console.log('[Log] Key does not exist');

			console.log('[Log] Adding key');
			parsedUIKitContent.UIStatusBarVisualProviderClassName = '_UIStatusBarVisualProvider_Split1170';
			console.log('[Log] Key added');

			console.log('[Log] Converting to XML');
			const uikitXml = await PropertyListSerialization.dataFromJson(parsedUIKitContent, 'xml');
			console.log('[Log] Done converting to XML');

			console.log('[Log] Writing to file');
			await fs.writeFile(uikitFile, uikitXml);
			console.log('[Log] Done writing to file');
		} else {
			console.log('[Log] Key exists');

			console.log('[Log] Checking if the correct value exists');
			const uikitValueExists = parsedUIKitContent.UIStatusBarVisualProviderClassName === '_UIStatusBarVisualProvider_Split1170';
			if (!uikitValueExists) {
				console.log('[Log] Value does not exist');

				console.log('[Log] Updating value');
				parsedUIKitContent.UIStatusBarVisualProviderClassName = '_UIStatusBarVisualProvider_Split1170';
				console.log('[Log] Value updated');

				console.log('[Log] Converting to XML');
				const uikitXml = await PropertyListSerialization.dataFromJson(parsedUIKitContent, 'xml');
				console.log('[Log] Done converting to XML');

				console.log('[Log] Writing to file');
				await fs.writeFile(uikitFile, uikitXml);
				console.log('[Log] Done writing to file');
			} else {
				console.log('[Log] Value exists');

				console.log('[Log] Value is correct');
			}
		}

		console.log('[Log] Finished');

		await system.showToast({
			title: 'Applied, Reboot Required',
			subTitle: '',
			displayMode: 'complete',
			type: 'regular'
		});

		await system.sleep(1000);

		return true;
	} catch (error) {
		console.log(`[ERROR] ${error}`);
		return false;
	}
}

async function restore() {
	try {
		const uikitFile = '/var/mobile/Library/Preferences/com.apple.UIKit.plist';
		const uikitDefault = `
        <?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
        <plist version="1.0">
        <dict>
            <key>UIStatusBarVisualProviderClassName</key>
            <string><null></string>
        </dict>
        </plist>`;

		console.log('[Log] Checking if the correct file exists');
		const uikitFileExists = await fs.exists(uikitFile);

		if (!uikitFileExists) {
			console.log('[Log] File does not exist');

			console.log('[Log] Requesting write permission');
			const fsPermission = await fs.access([uikitFile]);
			if (!fsPermission) return console.log(`[ERROR] Permission rejected`);
			console.log('[Log] Write permission granted');

			console.log('[Log] Creating file');
			await fs.writeFile(uikitFile, uikitDefault);
			console.log('[Log] File created');
		} else {
			console.log('[Log] File exists');
		}

		console.log('[Log] Requesting read permission');
		const fsPermission = await fs.access([uikitFile]);
		if (!fsPermission) return console.log(`[ERROR] Permission rejected`);
		console.log('[Log] Read permission granted');

		console.log('[Log] Reading file');
		const uikitContent = await fs.readFile(uikitFile);
		console.log('[Log] File read');

		console.log('[Log] Parsing read file');
		const parsedUIKitContent = await PropertyListSerialization.loadToJson(uikitContent);
		console.log('[Log] Done parsing read file');

		console.log('[Log] Checking if the correct key exists');
		const uikitKeyExists = parsedUIKitContent.UIStatusBarVisualProviderClassName;
		if (!uikitKeyExists) {
			console.log('[Log] Key does not exist');

			console.log('[Log] Adding key');
			parsedUIKitContent.UIStatusBarVisualProviderClassName = '<null>';
			console.log('[Log] Key added');

			console.log('[Log] Converting to XML');
			const uikitXml = await PropertyListSerialization.dataFromJson(parsedUIKitContent, 'xml');
			console.log('[Log] Done converting to XML');

			console.log('[Log] Writing to file');
			await fs.writeFile(uikitFile, uikitXml);
			console.log('[Log] Done writing to file');
		} else {
			console.log('[Log] Key exists');

			console.log('[Log] Checking if the correct value exists');
			const uikitValueExists = parsedUIKitContent.UIStatusBarVisualProviderClassName === '<null>';
			if (!uikitValueExists) {
				console.log('[Log] Value does not exist');

				console.log('[Log] Updating value');
				parsedUIKitContent.UIStatusBarVisualProviderClassName = '<null>';
				console.log('[Log] Value updated');

				console.log('[Log] Converting to XML');
				const uikitXml = await PropertyListSerialization.dataFromJson(parsedUIKitContent, 'xml');
				console.log('[Log] Done converting to XML');

				console.log('[Log] Writing to file');
				await fs.writeFile(uikitFile, uikitXml);
				console.log('[Log] Done writing to file');
			} else {
				console.log('[Log] Value exists');

				console.log('[Log] Value is correct');
			}
		}

		console.log('[Log] Finished');

		await system.showToast({
			title: 'Restored, Reboot Required',
			subTitle: '',
			displayMode: 'complete',
			type: 'regular'
		});

		await system.sleep(1000);

		return true;
	} catch (error) {
		console.log(`[ERROR] ${error}`);
		return false;
	}
}
