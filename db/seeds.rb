100.times do
  Quote.create{
    name = Faker::Name.name
    text = Faker::Quote.famous_last_words
  }
end

puts "100 quotes created"