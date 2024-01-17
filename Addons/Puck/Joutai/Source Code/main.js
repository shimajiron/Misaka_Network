async function apply() {
	try {
		console.log('[Log]: Fetching user settings');
		const userSettings = await getUserSettings();
		console.log('[Log]: Received user settings');

		if (userSettings.timeSlot != 'default') {
			let timeSlotString = '';
			console.log('[Log]: Configuring time slot');

			switch (userSettings.timeSlot) {
				case 'weatherModule':
					timeSlotString = await configureWeatherModule(userSettings);
					break;
				case 'batteryModule':
					timeSlotString = await configureBatteryModule();
					break;
				case 'memoryModule':
					timeSlotString = await configureMemoryModule(userSettings);
					break;
				case 'storageModule':
					timeSlotString = await configureStorageModule(userSettings);
					break;
				case 'ipModule':
					timeSlotString = await configureIPModule(userSettings);
					break;
				case 'gregorianDate':
					timeSlotString = await configureGregorianDate(userSettings);
					break;
				case 'lunarDate':
					timeSlotString = await configureLunarDate();
					break;
				case 'extendedTime':
					timeSlotString = await configureExtendedTime(userSettings);
					break;
				case 'maximumBatteryCapacity':
					timeSlotString = await configureBatteryHealth();
					break;
				case 'batteryChargeCycles':
					timeSlotString = await configureBatteryChargeCycles();
					break;
			}

			console.log('[Log]: Configured time slot');

			console.log('[Log]: Setting time slot');
			await statusbar.setTime(timeSlotString);
			console.log('[Log]: Done setting time slot');
		}

		if (userSettings.batteryDetailSlot != 'default') {
			let batteryDetailString = '';
			console.log('[Log]: Configuring battery detail slot');

			switch (userSettings.batteryDetailSlot) {
				case 'weatherModule':
					batteryDetailString = await configureWeatherModule(userSettings);
					break;
				case 'batteryModule':
					batteryDetailString = await configureBatteryModule();
					break;
				case 'memoryModule':
					batteryDetailString = await configureMemoryModule(userSettings);
					break;
				case 'storageModule':
					batteryDetailString = await configureStorageModule(userSettings);
					break;
				case 'ipModule':
					batteryDetailString = await configureIPModule(userSettings);
					break;
				case 'gregorianDate':
					batteryDetailString = await configureGregorianDate(userSettings);
					break;
				case 'lunarDate':
					batteryDetailString = await configureLunarDate();
					break;
				case 'extendedTime':
					timeSlotString = await configureExtendedTime(userSettings);
					break;
				case 'maximumBatteryCapacity':
					batteryDetailString = await configureBatteryHealth();
					break;
				case 'batteryChargeCycles':
					batteryDetailString = await configureBatteryChargeCycles();
					break;
			}

			console.log('[Log]: Configured battery detail slot');

			console.log('[Log]: Setting battery detail slot');
			await statusbar.setBatteryDetail(batteryDetailString);
			console.log('[Log]: Done setting battery detail slot');
		}

		if (userSettings.primaryCarrierSlot != 'default') {
			let primaryCarrierString = '';
			console.log('[Log]: Configuring primary carrier slot');

			switch (userSettings.primaryCarrierSlot) {
				case 'weatherModule':
					primaryCarrierString = await configureWeatherModule(userSettings);
					break;
				case 'batteryModule':
					primaryCarrierString = await configureBatteryModule();
					break;
				case 'memoryModule':
					primaryCarrierString = await configureMemoryModule(userSettings);
					break;
				case 'storageModule':
					primaryCarrierString = await configureStorageModule(userSettings);
					break;
				case 'ipModule':
					primaryCarrierString = await configureIPModule(userSettings);
					break;
				case 'gregorianDate':
					primaryCarrierString = await configureGregorianDate(userSettings);
					break;
				case 'lunarDate':
					primaryCarrierString = await configureLunarDate();
					break;
				case 'extendedTime':
					timeSlotString = await configureExtendedTime(userSettings);
					break;
				case 'maximumBatteryCapacity':
					primaryCarrierString = await configureBatteryHealth();
					break;
				case 'batteryChargeCycles':
					primaryCarrierString = await configureBatteryChargeCycles();
					break;
			}

			console.log('[Log]: Configured primary carrier slot');

			console.log('[Log]: Setting primary carrier slot');
			await statusbar.setPrimaryCarrierName(primaryCarrierString);
			console.log('[Log]: Done setting primary carrier slot');
		}

		if (userSettings.secondaryCarrierSlot != 'default') {
			let secondaryCarrierString = '';
			console.log('[Log]: Configuring secondary carrier slot');

			switch (userSettings.secondaryCarrierSlot) {
				case 'weatherModule':
					secondaryCarrierString = await configureWeatherModule(userSettings);
					break;
				case 'batteryModule':
					secondaryCarrierString = await configureBatteryModule();
					break;
				case 'memoryModule':
					secondaryCarrierString = await configureMemoryModule(userSettings);
					break;
				case 'storageModule':
					secondaryCarrierString = await configureStorageModule(userSettings);
					break;
				case 'ipModule':
					secondaryCarrierString = await configureIPModule(userSettings);
					break;
				case 'gregorianDate':
					secondaryCarrierString = await configureGregorianDate(userSettings);
					break;
				case 'lunarDate':
					secondaryCarrierString = await configureLunarDate();
					break;
				case 'extendedTime':
					timeSlotString = await configureExtendedTime(userSettings);
					break;
				case 'maximumBatteryCapacity':
					secondaryCarrierString = await configureBatteryHealth();
					break;
				case 'batteryChargeCycles':
					secondaryCarrierString = await configureBatteryChargeCycles();
					break;
			}

			console.log('[Log]: Configured secondary carrier slot');

			console.log('[Log]: Setting secondary carrier slot');
			await statusbar.setSecondaryCarrierName(secondaryCarrierString);
			console.log('[Log]: Done setting secondary carrier slot');
		}

		if (userSettings.breadcrumbSlot != 'default') {
			let breadcrumbString = '';
			console.log('[Log]: Configuring breadcrumb slot');

			switch (userSettings.breadcrumbSlot) {
				case 'weatherModule':
					breadcrumbString = await configureWeatherModule(userSettings);
					break;
				case 'batteryModule':
					breadcrumbString = await configureBatteryModule();
					break;
				case 'memoryModule':
					breadcrumbString = await configureMemoryModule(userSettings);
					break;
				case 'storageModule':
					breadcrumbString = await configureStorageModule(userSettings);
					break;
				case 'ipModule':
					breadcrumbString = await configureIPModule(userSettings);
					break;
				case 'gregorianDate':
					breadcrumbString = await configureGregorianDate(userSettings);
					break;
				case 'lunarDate':
					breadcrumbString = await configureLunarDate();
					break;
				case 'extendedTime':
					timeSlotString = await configureExtendedTime(userSettings);
					break;
				case 'maximumBatteryCapacity':
					breadcrumbString = await configureBatteryHealth();
					break;
				case 'batteryChargeCycles':
					breadcrumbString = await configureBatteryChargeCycles();
					break;
			}

			console.log('[Log]: Configured breadcrumb slot');

			console.log('[Log]: Setting breadcrumb slot');
			await statusbar.setBreadcrumb(breadcrumbString);
			console.log('[Log]: Done setting breadcrumb slot');
		}

		console.log('[Log]: Checking for Trollstore');
		const isTrollstore = await misaka.isTrollStore();
		if (!isTrollstore) {
			console.log('[Log]: Trollstore not found');

			console.log('[Log] Applying changes');
			await statusbar.apply();
		} else {
			console.log('[Log]: Trollstore found');
		}

		console.log('[Log] Finished Applying');
	} catch (error) {
		console.log(`[ERROR] ${error}`);
	}

	return true;
}

async function restore() {
	console.log('[Log] Restoring Time');
	await statusbar.unsetTime();
	console.log('[Log] Done restoring Time');

	console.log('[Log] Restoring Battery Detail');
	await statusbar.unsetBatteryDetail();
	console.log('[Log] Done restoring Battery Detail');

	console.log('[Log] Restoring Primary Carrier');
	await statusbar.unsetPrimaryCarrierName();
	console.log('[Log] Done restoring Primary Carrier');

	console.log('[Log] Restoring Secondary Carrier');
	await statusbar.unsetSecondaryCarrierName();
	console.log('[Log] Done restoring Secondary Carrier');

	console.log('[Log] Restoring Breadcrumb');
	await statusbar.unsetBreadcrumb();
	console.log('[Log] Done restoring Breadcrumb');

	console.log('[Log] Applying');
	await statusbar.apply();
	console.log('[Log] Done applying');

	console.log('[Log]: Checking for Trollstore');
	const isTrollstore = await misaka.isTrollStore();
	if (!isTrollstore) {
		console.log('[Log]: Trollstore not found');
		const respringAuth = await system.respringAccess();

		if (respringAuth) {
			console.log('[Log]: Respringing');
			await system.respring();
		}
	} else {
		console.log('[Log]: Trollstore found');
		console.log('[Log]: Skipping respring');
	}

	return true;
}

async function update() {
	console.log('[Log]: Fetching user settings');
	const userSettings = await getUserSettings();
	console.log('[Log]: Received user settings');

	console.log('[Log]: Calculating update interval');
	const updateInterval = userSettings.updateInterval * 3600;
	console.log(`[Log]: Update interval: ${updateInterval}`);

	console.log('[Log]: Applying');
	await apply();
	console.log('[Log]: Done applying');

	console.log('[Log]: Checking for Trollstore');
	const isTrollstore = await misaka.isTrollStore();
	if (!isTrollstore) {
		console.log('[Log]: Trollstore not found');
		const respringAuth = await system.respringAccess();

		if (respringAuth) {
			console.log('[Log]: Respringing');
			await system.respring();
		}

		return updateInterval;
	} else {
		console.log('[Log]: Trollstore found');
		console.log('[Log]: Skipping respring');

		return true;
	}
}

async function getUserSettings() {
	try {
		const configPlist = await fs.readFile((await process.cwd()) + '/config.plist');
		const configJSON = await PropertyListSerialization.loadToJson(configPlist);

		const userSettings = {};

		configJSON.forEach(item => {
			item.Tweaks.forEach(tweak => {
				userSettings[tweak.Identifier] = tweak.Value;
			});
		});

		return userSettings;
	} catch (error) {
		console.log(`[ERROR] ${error}`);
	}
}

async function configureWeatherModule(userSettings) {
	console.log('[Log]: Checking for location permissions');
	const locationAuth = await location.authorizationStatus();

	if (locationAuth != 'authorizedWhenInUse' || locationAuth != 'authorizedAlways') {
		console.log('[Log]: Requesting location permissions');
		if (await location.access()) {
			console.log('[Log]: Received location permissions');
		} else {
			try {
				await location.authorization();
			} catch (error) {
				console.log('[ERROR]: Failed to get location permissions');
				return false;
			}
		}
	}

	console.log('[Log]: Fetching current location');
	const coords = await location.getGPSCoordinate();
	if (coords.latitude == '0' && coords.longitude == '0') return console.log('[ERROR]: Failed to get current location');
	console.log(`[Log]: Received current location coordinates: ${coords.latitude}, ${coords.longitude}`);

	console.log('[Log]: Configuring weather API');
	const weatherModel = userSettings.weatherModuleModel == 'global' ? 'forecast' : userSettings.weatherModuleModel;
	console.log('[Log]: Configured weather API');

	const requestURL = 'https://api.open-meteo.com/v1';
	const url = `${requestURL}/${weatherModel}?latitude=${coords.latitude}&longitude=${coords.longitude}&current_weather=true${
		userSettings.weatherModuleUseCelsius ? '' : '&temperature_unit=fahrenheit'
	}`;

	console.log('[Log]: Fetching request permissions');
	const requestAuth = await request.access([requestURL]);
	if (requestAuth) {
		console.log('[Log]: Received request permissions');
	} else {
		console.log('[ERROR]: Failed to get request permissions');
		return false;
	}

	console.log('[Log]: Fetching current weather');
	const weather = await request.get({ url: url });
	console.log('[Log]: Received current Weather');

	console.log('[Log]: Parsing current weather data');
	const weatherData = JSON.parse(await freader.blobToText(weather));
	if (!weatherData.current_weather) return console.log('[ERROR]: Failed to get current weather data');
	console.log('[Log]: Finished parsing current weather data');

	console.log('[Log]: Fetching current temperature');
	const temp = weatherData.current_weather.temperature;
	console.log(`[Log]: Received current temperature: ${temp}`);

	console.log('[Log]: Fetching current weather code');
	const weatherCode = weatherData.current_weather.weathercode;
	console.log(`[Log]: Received current weather code: ${weatherCode}`);

	console.log('[Log]: Fetching weather emoji');
	const weatherEmoji = getWeatherEmoji(weatherCode);
	console.log(`[Log]: Received weather Emoji: ${weatherEmoji}`);

	console.log('[Log]: Fetching lunar phase');
	const lunarPhase = getLunarPhase();
	console.log(`[Log]: Received lunar phase: ${lunarPhase}`);

	let weatherStringArray = [];

	if (userSettings.weatherModuleShowTemp) {
		weatherStringArray.push(`${temp}${userSettings.weatherModuleUseCelsius ? '°C' : '°F'}`);
	}
	if (userSettings.weatherModuleShowEmoji) {
		weatherStringArray.push(`${weatherEmoji}`);
	}
	if (userSettings.weatherModuleShowMoon) {
		weatherStringArray.push(`${lunarPhase}`);
	}

	return weatherStringArray.join(' ');
}

async function configureBatteryModule() {
	console.log('[Log]: Fetching battery level');
	const batteryStatus = `${parseInt(await system.batteryLevel())}%`;
	console.log('[Log]: Received battery status');

	return batteryStatus;
}

async function configureMemoryModule(userSettings) {
	console.log('[Log]: Fetching system memory');
	const systemMemory = await system.memoryStatus();
	console.log('[Log]: Received system memory');

	if (userSettings.memoryModuleShowFree) {
		return `${(systemMemory.freeMemoryInMB / (userSettings.memoryModuleUseGB ? 1024 : 1)).toFixed(2)}${
			userSettings.memoryModuleShowTotal ? `/${(systemMemory.totalMemoryInMB / (userSettings.memoryModuleUseGB ? 1024 : 1)).toFixed(2)}` : ''
		}${userSettings.memoryModuleUseGB ? ' GB' : ' MB'}`;
	} else if (userSettings.memoryModuleShowUsed) {
		return `${(systemMemory.usedMemoryInMB / (userSettings.memoryModuleUseGB ? 1024 : 1)).toFixed(2)}${
			userSettings.memoryModuleShowTotal ? `/${(systemMemory.totalMemoryInMB / (userSettings.memoryModuleUseGB ? 1024 : 1)).toFixed(2)}` : ''
		}${userSettings.memoryModuleUseGB ? ' GB' : ' MB'}`;
	}
}

async function configureStorageModule(userSettings) {
	console.log('[Log]: Fetching system storage');
	const systemStorage = await system.discSpaceStatus();
	console.log('[Log]: Received system storage');

	if (userSettings.storageModuleShowFree) {
		return `${(systemStorage.freeDiscSpaceInMB / (userSettings.storageModuleUseGB ? 1024 : 1)).toFixed(2)}${
			userSettings.storageModuleShowTotal ? `/${(systemStorage.totalDiscSpaceInMB / (userSettings.storageModuleUseGB ? 1024 : 1)).toFixed(2)}` : ''
		}${userSettings.storageModuleUseGB ? ' GB' : ' MB'}`;
	} else if (userSettings.storageModuleShowUsed) {
		return `${(systemStorage.usedDiscSpaceInMB / (userSettings.storageModuleUseGB ? 1024 : 1)).toFixed(2)}${
			userSettings.storageModuleShowTotal ? `/${(systemStorage.totalDiscSpaceInMB / (userSettings.storageModuleUseGB ? 1024 : 1)).toFixed(2)}` : ''
		}${userSettings.storageModuleUseGB ? ' GB' : ' MB'}`;
	}
}

async function configureIPModule(userSettings) {
	console.log('[Log]: Fetching system IP');
	const systemIP = await system.getIpAddress();
	console.log('[Log]: Received system IP');

	return userSettings.ipModuleShowLocal ? systemIP.local : systemIP.global;
}

async function configureGregorianDate(userSettings) {
	console.log('[Log]: Fetching current gregorian date');
	const currentDate = new Date();
	console.log('[Log]: Received current gregorian date');

	const dateFormat = userSettings.gregorianDateFormat;
	const options = {
		'MM/dd': { month: '2-digit', day: '2-digit' },
		'MM/dd/yyyy': { month: '2-digit', day: '2-digit', year: 'numeric' },
		'MMM dd': { month: 'short', day: '2-digit' },
		'MMM dd yyyy': { month: 'short', day: '2-digit', year: 'numeric' },
		'dd/MM': { day: '2-digit', month: '2-digit' },
		'dd/MM/yyyy': { day: '2-digit', month: '2-digit', year: 'numeric' },
		'dd MMM': { day: '2-digit', month: 'short' },
		'dd MMM yyyy': { day: '2-digit', month: 'short', year: 'numeric' },
		'yyyy/MM/dd': { year: 'numeric', month: '2-digit', day: '2-digit' },
		'EEE, MMM dd': { weekday: 'short', month: 'short', day: '2-digit' },
		EEE: { weekday: 'long' }
	};

	console.log('[Log]: Formatting current gregorian date');
	const formattedDate =
		dateFormat === 'yyyy/MM/dd'
			? `${currentDate.getFullYear()}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getDate().toString().padStart(2, '0')}`
			: currentDate.toLocaleDateString(undefined, options[dateFormat]);
	console.log('[Log]: Formatted current gregorian date');

	return formattedDate;
}

async function configureLunarDate() {
	console.log('[Log]: Fetching current gregorian date');
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = currentDate.getMonth() + 1;
	const day = currentDate.getDate();
	console.log('[Log]: Received current gregorian date');

	const requestURL = 'http://116.205.225.100:8888/holiday?(.+)';
	const url = `http://116.205.225.100:8888/holiday?year=${year}&month=${month}&day=${day}`;

	console.log('[Log]: Fetching request permissions');
	const requestAuth = await request.access([requestURL]);
	if (requestAuth) {
		console.log('[Log]: Received request permissions');
	} else {
		console.log('[ERROR]: Failed to get request permissions');
		return false;
	}

	console.log('[Log]: Fetching current lunar calendar');
	const calendar = await request.get({ url: url });
	console.log('[Log]: Received current lunar calendar');

	console.log('[Log]: Parsing current lunar calendar data');
	const calendarData = JSON.parse(await freader.blobToText(calendar));
	const currentLunarDate = calendarData.data.dates[0];
	console.log('[Log]: Finished parsing lunar current calendar data');

	console.log('[Log]: Formatting current lunar calendar');
	const lunarCalendarString = `${currentLunarDate.lunarDate}/${currentLunarDate.lunarMonth}`;
	console.log('[Log]: Formatted current lunar calendar');

	return lunarCalendarString;
}

async function configureExtendedTime(userSettings) {
	console.log('[Log]: Fetching current time');
	const currentTime = new Date();
	console.log('[Log]: Received current time');

	const showAMPM = !userSettings.extendedTimeShowAMPM;
	const showSeconds = userSettings.extendedTimeShowSeconds;
	const use24Hour = userSettings.extendedTimeUse24Hours;

	console.log('[Log]: Formatting current time');
	let formattedTime;
	if (use24Hour) {
		formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes().toString().padStart(2, '0')}${
			showSeconds ? `:${currentTime.getSeconds().toString().padStart(2, '0')}` : ''
		}`;
	} else {
		formattedTime = `${currentTime.getHours() % 12 || 12}:${currentTime.getMinutes().toString().padStart(2, '0')}${
			showSeconds ? `:${currentTime.getSeconds().toString().padStart(2, '0')}` : ''
		} ${showAMPM ? (currentTime.getHours() >= 12 ? 'PM' : 'AM') : ''}`;
	}
	console.log('[Log]: Formatted current time');

	return formattedTime;
}

async function configureBatteryHealth() {
	console.log('[Log]: Checking for supported iOS version');
	const version = await system.version();
	if (!version.includes('16')) return console.log('[ERROR] Unsupported iOS version');
	console.log('[Log]: Supported iOS version');

	const delta_nccp = '/var/db/Battery/BI/delta_nccp.plist';
	const delta_qmaxp = '/var/db/Battery/BI/delta_qmaxp.plist';
	const delta_wra = '/var/db/Battery/BI/delta_wra.plist';

	let batteryData = '';

	console.log('[Log] Requesting read permission');
	const fsPermission = await fs.access(['/var/db/Battery/BI/']);
	if (!fsPermission) return console.log(`[ERROR] Permission rejected`);
	console.log('[Log] Read permission granted');

	console.log('[Log] Checking if battery data exists');
	if (fs.exists(delta_nccp)) {
		batteryData = await fs.readFile(delta_nccp);
	} else if (fs.exists(delta_qmaxp)) {
		batteryData = await fs.readFile(delta_qmaxp);
	} else if (fs.exists(delta_wra)) {
		batteryData = await fs.readFile(delta_wra);
	} else {
		return console.log(`[ERROR] ${error}`);
	}
	console.log('[Log] Battery data exists');

	console.log('[Log] Parsing battery data');
	const batteryDataJSON = await PropertyListSerialization.loadToJson(batteryData);
	const maximumBatteryCapacity = batteryDataJSON.start_nccp;
	console.log('[Log] Parsed battery data');

	console.log('[Log] Formatting battery health');
	const maximumBatteryCapacityFormatted = `${Math.round(maximumBatteryCapacity * 100)}%`;
	console.log('[Log] Formatted battery health');

	return maximumBatteryCapacityFormatted;
}

async function configureBatteryChargeCycles() {
	console.log('[Log]: Checking for supported iOS version');
	const version = await system.version();
	if (!version.includes('16')) return console.log('[ERROR] Unsupported iOS version');
	console.log('[Log]: Supported iOS version');

	const delta_nccp = '/var/db/Battery/BI/delta_nccp.plist';
	const delta_qmaxp = '/var/db/Battery/BI/delta_qmaxp.plist';
	const delta_wra = '/var/db/Battery/BI/delta_wra.plist';

	let batteryData = '';

	console.log('[Log] Requesting read permission');
	const fsPermission = await fs.access(['/var/db/Battery/BI/']);
	if (!fsPermission) return console.log(`[ERROR] Permission rejected`);
	console.log('[Log] Read permission granted');

	console.log('[Log] Checking if battery data exists');
	if (fs.exists(delta_nccp)) {
		batteryData = await fs.readFile(delta_nccp);
	} else if (fs.exists(delta_qmaxp)) {
		batteryData = await fs.readFile(delta_qmaxp);
	} else if (fs.exists(delta_wra)) {
		batteryData = await fs.readFile(delta_wra);
	} else {
		return console.log(`[ERROR] ${error}`);
	}
	console.log('[Log] Battery data exists');

	console.log('[Log] Parsing battery data');
	const batteryDataJSON = await PropertyListSerialization.loadToJson(batteryData);
	const batteryChargeCycles = `${batteryDataJSON.start_cycles} ↻`;
	console.log('[Log] Parsed battery data');

	return batteryChargeCycles;
}

function getWeatherEmoji(weatherCode) {
	const weatherCodeMap = {
		0: '☀️',
		1: '🌤️',
		2: '⛅',
		3: '☁️',
		45: '🌫️',
		48: '🌫️',
		51: '🌧️',
		53: '🌧️',
		55: '🌧️',
		56: '🌧️',
		57: '🌧️',
		61: '🌧️',
		63: '🌧️',
		65: '🌧️',
		66: '🌧️',
		67: '🌧️',
		71: '❄️',
		73: '❄️',
		75: '❄️',
		77: '❄️',
		80: '🌦️',
		81: '🌦️',
		82: '🌦️',
		85: '🌨️',
		86: '🌨️',
		95: '⛈️',
		96: '⛈️',
		99: '⛈️'
	};

	return weatherCodeMap[weatherCode] || '❓';
}

function getLunarPhase() {
	const LUNAR_MONTH = 29.530588853;
	const date = new Date();
	const julianDate = date / 86400000 - date.getTimezoneOffset() / 1440 + 2440587.5;
	const age = (((julianDate - 2451550.1) % LUNAR_MONTH) + LUNAR_MONTH) % LUNAR_MONTH;
	const phases = {
		New: '🌑',
		'Waxing Crescent': '🌒',
		'First Quarter': '🌓',
		'Waxing Gibbous': '🌔',
		Full: '🌕',
		'Waning Gibbous': '🌖',
		'Last Quarter': '🌗',
		'Waning Crescent': '🌘'
	};
	const phaseIndex = Math.floor(age / (LUNAR_MONTH / Object.keys(phases).length));
	const phaseName = Object.keys(phases)[phaseIndex];
	return phases[phaseName] || '❓';
}
