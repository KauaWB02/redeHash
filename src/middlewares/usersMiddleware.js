const validateFieldsUser = (req, res, next) => {
	const { body } = req;

	//validate name
	if (body.name === undefined) {
		return res.status(400).json({
			message: 'O campo nome não pode ser indefinido',
		});
	}

	if (body.name === '') {
		return res.status(400).json({
			message: 'O campo nome não pode ser vazio',
		});
	}

	//validate email
	if (body.email === undefined) {
		return res.status(400).json({
			message: 'O campo email não pode ser indefinido',
		});
	}

	if (body.email === '') {
		return res.status(400).json({
			message: 'O campo email não pode ser vazio',
		});
	}

	next();
};

const validateAddUser = (req, res, next) => {
	const { body } = req;

	//validate name
	if (body.IdUserFrom === undefined) {
		return res.status(400).json({
			message: 'O campo IdUserFrom não pode ser indefinido',
		});
	}

	if (body.IdUserFrom === '') {
		return res.status(400).json({
			message: 'O campo IdUserFrom não pode ser vazio',
		});
	}

	if (body.IdUserTo === undefined) {
		return res.status(400).json({
			message: 'O campo IdUserTo não pode ser indefinido',
		});
	}

	if (body.IdUserTo === '') {
		return res.status(400).json({
			message: 'O campo userTo não pode ser vazio',
		});
	}

	next();
};

module.exports = { validateFieldsUser, validateAddUser };
