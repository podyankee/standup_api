import fs from 'node:fs/promises';

export const checkFileExists = async path => {
	try {
		await fs.access(path);
	} catch (error) {
		console.error(`Файл ${path} не найден`);
		return false;
	}

	return true;
};

export const createFileIfNotExists = async path => {
	try {
		await fs.access(path);
	} catch (error) {
		console.log('error', error);
		await fs.writeFile(path, JSON.stringify([]));
		console.log(`Файл ${path} был создан`);
		return true;
	}
};
