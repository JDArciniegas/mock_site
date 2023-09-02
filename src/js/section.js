const SectionContent = (sectionName) => {
  const sectionContainer = document.createElement("div");
  sectionContainer.setAttribute("id", sectionName);
  sectionContainer.classList.add("section");
  return sectionContainer;
};

const SectionHead = (headName) => {
  const heading = document.createElement("h1");
  heading.classList.add("section-head");
  heading.innerText = headName;
  return heading;
};

const AdoptionStepsList = () => {
  let list = document.createElement("ol");
  list.setAttribute("id", "adoption-process-steps");
  return list;
};

const AdoptionStepsListItem = (source, tagLine) => {
  let listItem = document.createElement("li");
  listItem.append(AdoptionStepsImg(source));
  listItem.append(AdoptionStepsName(tagLine));

  return listItem;
};

const AdoptionStepsContainer = () => {
  const container = document.createElement("div");
  container.classList.add("step-container");
  return container;
};

const AdoptionStepsImg = (source) => {
  const image = document.createElement("img");
  image.setAttribute("src", `./images/${source}.png`);
  image.setAttribute("alt", `${source} icon`);
  image.classList.add("adoption-icon");
  return image;
};

const AdoptionStepsDescription = (text) => {
  const description = document.createElement("p");
  description.innerText = text;
  description.classList.add("steps-par");
  return description;
};

const AdoptionStepsName = (name) => {
  const par = document.createElement("p");
  par.innerText = name;
  par.classList.add("adoption-tag-line");
  return par;
};

const BuildStep = (source, tagLine, text) => {
  let step = AdoptionStepsContainer();
  let listItem = AdoptionStepsListItem(source, tagLine);
  let description = AdoptionStepsDescription(text);
  step.append(listItem);
  step.append(description);
  return step;
};

const BuildList = () => {
  let list = AdoptionStepsList();

  list.append(
    BuildStep(
      "search",
      "Choose Your Pet",
      "Animals are placed on the website as soon as they are ready for adoption. New animals are added daily, so please keep checking if you do not see one who fits your family right away."
    )
  );

  list.append(
    BuildStep(
      "submit",
      "Submit Application",
      "Once you find an animal you are interested in, click ‘Adopt Me’ on their profile page. You will then be asked to create an Adopets account and answer some questions about you and your family, your lifestyle, and what you are looking for in a pet. This will help us make sure they’re a good match for you."
    )
  );
  list.append(
    BuildStep(
      "call",
      "Phone Consultation",
      "call within two business days to go through the animal’s medical and behaviour history and their lifestyle needs."
    )
  );
  list.append(
    BuildStep(
      "meet",
      "Meet & Greet",
      "After reviewing the pet’s history, we will schedule a meet-and-greet appointment for your family and potential new pet.      If all goes well, we will proceed steps 5 and 6 the same day, so be prepared to take your new pet home!"
    )
  );
  list.append(
    BuildStep(
      "finish",
      "Finalize Application",
      "Now that you’ve decided on your new pet, we’ll review what is included with your adoption and answer any remaining questions you have."
    )
  );
  list.append(
    BuildStep(
      "home",
      "Bring them home",
      "It’s official! You can now start creating a lifetime of memories together with your new pet and family."
    )
  );

  return list;
};

const BuildSection = () => {
  let sectionContent = SectionContent("adoption-process");
  sectionContent.append(SectionHead("How to Adopt"));
  sectionContent.append(BuildList());

  return sectionContent;
};

const Section = () => {
  return BuildSection();
};

export default Section;
