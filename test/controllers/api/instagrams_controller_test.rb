require 'test_helper'

class Api::InstagramsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_instagrams_index_url
    assert_response :success
  end

end
