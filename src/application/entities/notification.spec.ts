import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma nova solicitação de amizade'),
      category: 'Social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
