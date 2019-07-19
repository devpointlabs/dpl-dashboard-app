class InstagramClient
  def self.home_images
    client.home_images
  end

  private
  def self.client
    Instagram::REST::Client.new do |config|
      config.instagram_url = ENV['INSTAGRAM_URL']
      # config.access_token  = ENV['INSTAGRAM_ACCESS_TOKEN']
      # config.user_id       = ENV['USER_ID']
    end
  end
end

