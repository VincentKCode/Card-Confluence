import * as usersService from '../../utilities/users-service';

export default function DeckPage() {
  async function handleCheckToken() {
    // this is where we make a try/catch block in case of a failed promise

    // goes to usersService after click
    const expDate = await usersService.checkToken();
    console.log('Expires: ', expDate);
  }

  return (
    <>
      <h1>Deck Page</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}