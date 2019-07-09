100.times do
  Quote.create(
    author: Faker::Name.name,
    body: Faker::Quote.most_interesting_man_in_the_world,
    category: Faker::Number.between(1, 5),
    current_quote: false, 
  )
end

puts "100 quotes created"