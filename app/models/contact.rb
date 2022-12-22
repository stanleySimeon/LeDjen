class Contact < MailForm::Base
  attr_accessor :name, :email, :message, :nickname, :request

  validates :name, :email, :message, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :nickname, absence: true

  def headers
    {
      subject: %(#{name} has contacted you via your website),
      to: 'mstanley.me@gmail.com',
      from: %("#{name}" <#{email}>)
    }
  end
end
