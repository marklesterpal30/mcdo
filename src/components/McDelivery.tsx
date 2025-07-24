import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import mcd1 from "../assets/mcdelivery/mcd1.jpg";
import mcd2 from "../assets/mcdelivery/mcd2.jpg";
import mcd3 from "../assets/mcdelivery/mcd3.jpg";
import mcd4 from "../assets/mcdelivery/mcd4.jpg";
import mcd5 from "../assets/mcdelivery/mcd5.jpg";
import mcd6 from "../assets/mcdelivery/mcd6.jpg";

import mcd7 from "../assets/mcdelivery/mcd7.jpg";
import mcd8 from "../assets/mcdelivery/mcd8.jpg";

const McDelivery = () => {
	return (
		<Box paddingX="180px">
			<Heading textAlign="center" mt={55} fontSize="50px">
				McDonald's Delivery: Food Delivery Near Me
			</Heading>
			<Flex columnGap={22} mt="111px">
				<Box flex="4">
					<Image src={mcd1} height="333px" />
				</Box>
				<Box flex="2">
					<Heading fontSize="33px">
						McDelivery® is where you get food. And free food.
					</Heading>
					<Text mt="4px">
						Every McDelivery order in the app lets you earn MyMcDonald's
						Rewards points—use those to get your free food. And, yup, you
						can get 'em delivered, too. Imagine, McD's you didn't pay for
						brought right to you. Check out how easy ordering delivery is
						in the app.*
					</Text>
					<Text fontSize="10px" mt="33px">
						*At participating McDonald's. Must opt into Rewards.
						McDelivery prices may be higher than at restaurants.
						Delivery/other fees may apply.
					</Text>
					<Button mt="22px" bg="#FFBC0D" _hover={{ bg: "#e0a800" }}>
						Earn Points With McDelivery
					</Button>
				</Box>
			</Flex>
			<Box mt="55px">
				<Heading mb="33px">How you do this McDelivery thing</Heading>
				<SimpleGrid columns={3} columnGap="28px">
					<Box>
						<Image src={mcd2} />
						<Heading fontWeight="nomral" fontSize="36px">
							Make your way to the McDonald's app
						</Heading>
						<Text lineHeight="short" mt="22px">
							First thing's first, got the right address? Once that's
							sorted out, order whatever you want. Add extra pickles or
							make your burger plain, the app's not gonna judge. You'll
							start racking up MyMcDonald's Rewards points which means
							free food for future you.
						</Text>
					</Box>
					<Box>
						<Image src={mcd3} />
						<Heading fontWeight="nomral" fontSize="36px">
							Now, you pay & do nothing
						</Heading>
						<Text lineHeight="short" mt="22px">
							You can use Apple Pay or Google Pay, but a linked card is
							the easiest. Then you get to chill and let the McD's come
							to you. Try not to check the order tracker every second. Or
							do. You do you.
						</Text>
					</Box>
					<Box>
						<Image src={mcd4} />
						<Heading fontWeight="nomral" fontSize="36px">
							Pretend you're not waiting by the door
						</Heading>
						<Text lineHeight="short" mt="22px">
							Give it a few... and open. It's just too easy—but if you
							have questions from breakfast delivery and late night
							delivery to all the burger delivery in between, you'll find
							answers in the McDelivery FAQs.*
						</Text>
						<Text fontSize="10px" mt="11px">
							*At participating McDonald's. Delivery prices may be higher
							than at restaurants. Delivery/other fees may apply.
						</Text>
					</Box>
				</SimpleGrid>
			</Box>
			<Box>
				<Flex mt="155px" columnGap="28px">
					<Box flex="4">
						<Image src={mcd5} />
					</Box>
					<Box flex="2">
						<Heading>There's more McD's delivery out there</Heading>
						<Text mt="22px">
							When you realize you got options—download the Uber Eats,
							DoorDash or Grubhub app and use the McD's promo code for a
							lil' extra something. It's ok, it doesn't count as cheating
							(you just won't get those MyMcDonald's Rewards points). So,
							if you're searching for “food delivery close to me,” find
							these instead.*
						</Text>
						<Text fontSize="10px" mt="11px">
							*At participating McDonald's. Delivery prices may be higher
							than at restaurants. Delivery/other fees may apply.
						</Text>
					</Box>
				</Flex>
				<Box mt="77px">
					<Heading>The question is, got any questions?</Heading>
					<Text mt="27px">
						If you're curious about the ins and outs of McDonald's
						delivery partners, other people probably were too. Check out
						the delivery FAQs for some answers.*
					</Text>
					<Text fontSize="10px" mt="27px">
						*At participating McDonald's. Delivery prices may be higher
						than at restaurants. Delivery/other fees may apply.
					</Text>
					<Button mt="22px" bg="#FFBC0D" _hover={{ bg: "#e0a800" }}>
						Go to Deliver FAQs
					</Button>
					<Heading mt="82px">All FAQs</Heading>
					<Text mt="22px">
						For some real knowledge, find all the McDelivery and delivery
						partner FAQs on the Mobile Order & Pay FAQ page. It's
						basically a delivery encyclopedia.
					</Text>
				</Box>
			</Box>
			<SimpleGrid columns={3} columnGap="18px" mt="166px" mb="111px">
				<Box
					border="2px"
					borderColor="gray.700"
					borderRadius="md"
					overflow="hidden"
				>
					<Image src={mcd6} />
					<Box p="33px">
						<Heading fontSize="25px">
							Earn Points for Free McDonald's
						</Heading>
						<Text>
							Download the app and join MyMcDonald's Rewards to earn
							bonus points on your McDonald's orders—then, start getting
							fave after fave for free. *
						</Text>
						<Button mt="22px" bg="#FFBC0D" _hover={{ bg: "#e0a800" }}>
							Joing Now
						</Button>
						<Text fontSize="10px" mt="22px">
							* At participating McDonald’s. Refer to MyMcDonald’s
							Program Terms for details. Must opt in to Rewards.
						</Text>
					</Box>
				</Box>
				<Box
					border="2px"
					borderColor="gray.700"
					borderRadius="md"
					overflow="hidden"
				>
					<Image src={mcd7} />
					<Box p="33px">
						<Heading fontSize="25px">
							Contactless Payment? Great Call.
						</Heading>
						<Text>
							Pick up your favorites in the Drive Thru or curbside with
							Mobile Order & Pay.*
						</Text>
						<Button mt="65px" bg="#FFBC0D" _hover={{ bg: "#e0a800" }}>
							Use the App to Order
						</Button>
						<Text fontSize="10px" mt="22px">
							* At participating McDonald's. Must opt into Rewards.
						</Text>
					</Box>
				</Box>
				<Box
					border="2px"
					borderColor="gray.700"
					borderRadius="md"
					overflow="hidden"
				>
					<Image src={mcd8} />
					<Box p="33px">
						<Heading fontSize="25px">Join Our Email List</Heading>
						<Text>
							Get news, promotions and more delivered right to your
							inbox.
						</Text>
						<Button mt="100px" bg="#FFBC0D" _hover={{ bg: "#e0a800" }}>
							Sing Up For Our Email List
						</Button>
					</Box>
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default McDelivery;
