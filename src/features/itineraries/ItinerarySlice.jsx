import { createSlice } from "@reduxjs/toolkit";
import { fetchItineraries, fetchItinerariesInCity } from "./ItineraryAction";
import { toggleFavorite } from "../places/PlaceAction";

const initialState = {
    itineraries: [],
    loading: false,
    error: null,
    next: null,
    count: 0,
    isFavoriteToggling: false,
    favTogglingId: null
};

const itinerarySlice = createSlice({
    name: "itineraries",
    initialState,
    reducers: {
        setFavTogglingId: (state, action) => {
            state.favTogglingId = action.payload;
        },
        listUpdater: (state, action) => {
            state.itineraries = [...state.itineraries, ...action.payload?.results];
            state.next = action.payload.next;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItineraries.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchItineraries.fulfilled, (state, action) => {
                state.loading = false;
                state.itineraries = action.payload;
                state.next = action.payload?.next;
                state.count = action.payload?.count;
            })
            .addCase(fetchItineraries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Toggle favorite
            .addCase(toggleFavorite.pending, (state) => {
                state.isFavoriteToggling = true;
                state.error = null;
            })
            .addCase(toggleFavorite.fulfilled, (state, action) => {
                state.isFavoriteToggling = false;
                state.favTogglingId = null;

                const updateditineraries = state.itineraries.map(itinerary => {
                    if (itinerary.id === action.payload.id) {
                        return {
                            ...itinerary,
                            is_fav: action.payload.response.detail === "Marked as favorite"
                        };
                    }
                    return itinerary;
                });

                state.itineraries = updateditineraries;
            })
            .addCase(toggleFavorite.rejected, (state, action) => {
                state.isFavoriteToggling = false;
                state.error = action.payload;
            })
            .addCase(fetchItinerariesInCity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchItinerariesInCity.fulfilled, (state, action) => {
                state.loading = false;
                state.itineraries = action.payload?.results || [];
                state.next = action.payload?.next;
                state.count = action.payload?.count;
            })
            .addCase(fetchItinerariesInCity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});
export const { setFavTogglingId, listUpdater } = itinerarySlice.actions;
export default itinerarySlice.reducer;