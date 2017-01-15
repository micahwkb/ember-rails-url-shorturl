class Url < ApplicationRecord
  before_save :check_prefix
  before_save :create_short_url

  protected

  def create_short_url
    self.short = SecureRandom.hex(3)
  end

  def check_prefix
    if !self.url.include?('http')
      self.url = "http://#{self.url}"
    end
  end
end
