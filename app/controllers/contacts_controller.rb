class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:success] = 'Thank you for your message. We will contact you soon!'
    elsif !@contact.valid? && @contact.errors[:email].present?
      flash.now[:error] = 'Please enter a valid email address.'
    else
      flash.now[:error] = 'Cannot send message.'
    end
    render :new
  end
end
