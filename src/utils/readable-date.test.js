import { FriendlyDate } from './readable-date';

describe('readable-date.js', () => {
  const initIso = '2013-06-21T16:39:08.630Z';

  it('"FriendlyDate" returns a readable date in the correct format', () => {
    const friendlyDate = FriendlyDate(initIso);

    expect(friendlyDate).toBe('Friday June 21, 2013 at 12:39 pm');
  });
});
