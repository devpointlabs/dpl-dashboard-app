100.times do
    name = Faker::Name.name
    content = Faker::Quote.famous_last_words
    Quote.create(name: name, content: content)
end

puts "100 quotes created"