export function getAnimalsImages() {
  return fetch(
    'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=9'
  )
    .then((response) => response.json())
    .then((response) => {
      const images = response?.entries?.map(
        (animal) => animal.fields.image.url
      );
      return images;
    });
}
