import {
	Box,
	Button,
	Grid,
	Heading,
	Image,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import aboutimage from "../assets/aboutfood.jpg";
import passionate1 from "../assets/passionate/passionate1.jpg";
import passionate2 from "../assets/passionate/passionte2.jpg";
import passionate3 from "../assets/passionate/passionate3.jpg";
import passionate4 from "../assets/passionate/passionate4.jpg";
import passionate5 from "../assets/passionate/passionate5.jpg";
import passionate6 from "../assets/passionate/passionate6.jpg";
import passionate7 from "../assets/passionate/passionate7.jpg";
import passionate8 from "../assets/passionate/passionate8.jpg";
const About = () => {
	return (
		<Box paddingX="155px">
			<Box mt="66px">
				<Heading textAlign="center" fontSize="6xl" mb={3}>
					About Our Food
				</Heading>
				<Image src={aboutimage} />
			</Box>

			<Box mt="99px">
				<Heading>We’re Passionate About Our Food</Heading>
				<Text lineHeight="short" mt="7px">
					Explore McDonald's food facts, including calorie and dietary
					info. Learn about nutrition facts and the ingredients used to
					deliver quality in every meal, including more balanced options
					for a Happy Meal® and each fresh beef Quarter Pounder®* burger is
					cooked when you order.{" "}
				</Text>
				<Text lineHeight="shorter" fontSize="11px" mt="22px">
					*Weight before cooking 4 oz. At participating McDonald's. Fresh
					Beef available at most restaurants in contiguous US. Not
					available in Alaska, Hawaii, and US Territories.
				</Text>
			</Box>

			<SimpleGrid
				columns={2}
				columnGap={8}
				rowGap="111px"
				spacing={4}
				mt="99px"
			>
				<Box>
					<Image src={passionate1} alt="Passionate 1" />
					<Heading fontWeight="medium" mt={4}>
						Commitment to Quality
					</Heading>
					<Text fontWeight="thin" paddingY={15}>
						We're dedicated to improving the way we prepare our quality
						food and the ingredients that go into it.
					</Text>
					<Button bg="yellow.600">Learn More About Quality</Button>
				</Box>
				<Box>
					<Image src={passionate2} alt="Passionate 2" />
					<Heading fontWeight="medium" mt={4}>
						What's in Your Food
					</Heading>
					<Text fontWeight="thin" paddingY={15}>
						Find out what makes our ingredients special.
					</Text>
					<Button bg="yellow.600">Learn More About Ingredients</Button>
				</Box>
				<Box>
					<Image src={passionate3} alt="Passionate 3" />
					<Text mt={2}>Text for Passionate 3</Text>
					<Heading fontWeight="medium" mt={4}>
						Our Food Philisophy
					</Heading>
					<Text fontWeight="thin" paddingY={15}>
						We're passionate about our food. That's why we're committed to
						always evolving what matters to you.
					</Text>
					<Button bg="yellow.600">Learn More</Button>
				</Box>
				<Box>
					<Image src={passionate4} alt="Passionate 4" />
					<Heading fontWeight="medium" mt={4}>
						Nutrition Calculator
					</Heading>
					<Text fontWeight="thin" paddingY={15}>
						Our nutrition calculator has the McDonald’s menu nutrition
						information you’re seeking. Learn more about your favorite
						meals..
					</Text>
					<Button bg="yellow.600">Learn More</Button>
				</Box>
				<Box>
					<Image src={passionate5} alt="Passionate 5" />
					<Heading fontWeight="medium" mt={4}>
						Our Food Experts
					</Heading>
					<Text fontWeight="thin" paddingY={15}>
						From our chefs, to our registered dieticians and suppliers,
						McDonald’s food experts care deeply about the food you eat.
					</Text>
					<Button bg="yellow.600">Learn More</Button>
				</Box>
				<Box>
					<Image src={passionate6} alt="Passionate 6" />
					<Heading fontWeight="medium" mt={4}>
						Fresh Beef
					</Heading>
					<Text fontWeight="thin" paddingY={15}>
						Our Quarter Pounder® patty is made with 100% fresh beef and
						cooked right when you order. It's hot and deliciously juicy
						and full of flavor.
					</Text>
					<Button bg="yellow.600">Learn More</Button>
				</Box>
				<Box>
					<Image src={passionate7} alt="Passionate 7" />
					<Heading fontWeight="medium" mt={4}>
						Happy Meal® Nutritiony
					</Heading>
					<Text fontWeight="thin" paddingY={15}>
						When your kids enjoy a meal that's delicious and balanced,
						you'll enjoy it too
					</Text>
					<Button bg="yellow.600">Learn More</Button>
				</Box>
				<Box>
					<Image src={passionate8} alt="Passionate 8" />
					<Heading fontWeight="medium" mt={4}>
						Variety of Choices
					</Heading>
					<Text fontWeight="thin" paddingY={15}>
						When it comes to quality options, we've got you covered..
					</Text>
					<Button bg="yellow.600">Learn More</Button>
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default About;
