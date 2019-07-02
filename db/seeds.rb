100.times do
  Quote.create(
    author: Faker::Name.name,
    body: Faker::Quote.famous_last_words
  )
end

puts "100 quotes created"