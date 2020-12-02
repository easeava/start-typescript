class User {
  name!: string;
  email!: string;
}

test('shoud be ok', () => {
	const user = new User()

	user.name = 'Ease'

	expect(user.name).toEqual('Ease')
})
