require 'test_helper'

class Api::TweetsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_tweets_index_url
    assert_response :success
  end

end
